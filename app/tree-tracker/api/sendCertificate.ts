import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas, registerFont, loadImage } from 'canvas';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Certificate generation function
async function generateCertificate(name: string, treeId: number, species: string, latitude: number, longitude: number) {
  const fontPath = path.join(process.cwd(), 'fonts', 'your-font.ttf');
  registerFont(fontPath, { family: 'YourFont' });
  
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // Load background image
  const backgroundPath = path.join(process.cwd(), 'public', 'images', 'certificate-background.png');
  const background = await loadImage(backgroundPath);
  ctx.drawImage(background, 0, 0, 800, 600);

  // Add text
  ctx.font = '30px YourFont';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText(`Certificate of Tree Planting`, 400, 100);
  ctx.fillText(`This certifies that`, 400, 180);
  ctx.fillText(name, 400, 220);
  ctx.fillText(`has planted a ${species} tree`, 400, 260);
  ctx.fillText(`at coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`, 400, 300);
  ctx.fillText(`Tree ID: ${treeId}`, 400, 340);
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, 400, 380);

  return canvas.toBuffer('image/png');
}

// Email sending function
async function sendEmail(to: string, subject: string, text: string, attachmentBuffer: Buffer) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    attachments: [
      {
        filename: 'certificate.png',
        content: attachmentBuffer,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, species, latitude, longitude, organization } = req.body;

      // Insert tree record
      const { data: treeData, error: treeError } = await supabase
        .from('trees')
        .insert({
          species,
          latitude,
          longitude,
          planter_name: name,
          organization
        })
        .select()
        .single();

      if (treeError) throw treeError;

      // Generate certificate
      const certificateBuffer = await generateCertificate(name, treeData.id, species, latitude, longitude);

      // Save certificate to Supabase Storage
      const fileName = `${treeData.id}_${Date.now()}.png`;
      const { data: storageData, error: storageError } = await supabase
        .storage
        .from('certificates')
        .upload(fileName, certificateBuffer, {
          contentType: 'image/png',
          upsert: true
        });

      if (storageError) throw storageError;

      // Get public URL for the certificate
      const { data: { publicUrl } } = supabase
        .storage
        .from('certificates')
        .getPublicUrl(fileName);

      // Record certificate in database
      const { data: certData, error: certError } = await supabase
        .from('certificates')
        .insert({
          tree_id: treeData.id,
          recipient_name: name,
          recipient_email: email,
          certificate_path: publicUrl
        })
        .select()
        .single();

      if (certError) throw certError;

      console.log('Inserted certificate:', certData);

      // Send email
      await sendEmail(
        email,
        'Your Tree Planting Certificate',
        `Dear ${name},\n\nThank you for planting a ${species} tree at coordinates: ${latitude}, ${longitude}! Please find your certificate attached.\n\nYou can also view your certificate online at: ${publicUrl}\n\nBest regards,\nThe Tree Planting Team`,
        certificateBuffer
      );

      res.status(200).json({ message: 'Tree planted and certificate sent successfully', treeId: treeData.id, certificateId: certData.id });
    } catch (error) {
      console.error('Error processing tree planting:', error);
      res.status(500).json({ 
        message: 'Error processing tree planting', 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
