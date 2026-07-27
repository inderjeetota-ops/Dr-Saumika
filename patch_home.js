import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// replace import
content = content.replace(
  "import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award } from 'lucide-react';",
  "import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award, Ribbon } from 'lucide-react';"
);

// replace TumourIcon component declaration
const tumourRegex = /const TumourIcon = \(props: React\.SVGProps<SVGSVGElement>\) => \([\s\S]*?<\/svg>\n\);\n\n/;
content = content.replace(tumourRegex, "");

// replace TumourIcon in array
content = content.replace(
  "{ icon: TumourIcon, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' }",
  "{ icon: Ribbon, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' }"
);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx');
