import fs from 'fs';
const file = 'src/pages/ServiceDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `  const seoData: Record<string, { title: string; desc: string }> = {
    'eyelid-disorders-eyelid-surgery': {
      title: "Eyelid Disorders & Surgery | Dr. Saumika Singh, Lucknow",
      desc: "Expert diagnosis and surgical treatment of eyelid disorders including ptosis, entropion, ectropion and eyelid tumours by Dr. Saumika Singh in Lucknow."
    },
    'watering-eyes-tear-drainage-disorders': {
      title: "Watering Eyes & Tear Duct Surgery | Dr. Saumika Singh",
      desc: "Specialist treatment for watering eyes and lacrimal (tear duct) drainage disorders, including DCR surgery, by Dr. Saumika Singh in Lucknow."
    },
    'orbital-disorders-orbital-surgery': {
      title: "Orbital Disorders & Surgery | Dr. Saumika Singh, Lucknow",
      desc: "Diagnosis and surgical management of orbital diseases including thyroid eye disease, orbital tumours and fractures by Dr. Saumika Singh in Lucknow."
    },
    'eye-tumours-ocular-oncology': {
      title: "Eye Tumours & Ocular Oncology | Dr. Saumika Singh, Lucknow",
      desc: "Comprehensive care for eyelid, conjunctival and intraocular tumours from a fellowship-trained ocular oncology specialist in Lucknow."
    },
    'socket-reconstruction-artificial-eye-rehabilitation': {
      title: "Socket Reconstruction & Custom Eyes | Dr. Saumika Singh",
      desc: "Socket reconstruction surgery and artificial eye (ocular prosthesis) rehabilitation for patients who have lost an eye, offered by Dr. Saumika Singh in Lucknow."
    },
    'eye-trauma-eyelid-orbital-reconstruction': {
      title: "Eye Trauma & Orbital Reconstruction | Dr. Saumika Singh",
      desc: "Emergency and reconstructive surgery for eye, eyelid and orbital trauma by Dr. Saumika Singh, oculoplasty specialist in Lucknow."
    },
    'botox-eyelid-cosmetic-surgery-periocular-aesthetics': {
      title: "Botox & Cosmetic Eyelid Surgery | Dr. Saumika Singh",
      desc: "Cosmetic eyelid surgery, Botox and periocular aesthetic treatments performed by oculoplasty specialist Dr. Saumika Singh in Lucknow."
    },
    'why-choose-an-oculoplasty-ocular-oncology-specialist': {
      title: "Why Choose an Oculoplasty Specialist | Dr. Saumika Singh",
      desc: "Understand the difference a fellowship-trained oculoplasty and ocular oncology specialist makes for eyelid, orbital and eye tumour conditions."
    }
  };`;

content = content.replace(/  const seoData: Record<string, { title: string; desc: string }> = {[\s\S]*?  };\n/, replacement + '\n');
fs.writeFileSync(file, content);
