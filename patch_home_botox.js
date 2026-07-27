import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// replace import
content = content.replace(
  "import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award, Ribbon } from 'lucide-react';",
  "import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award, Ribbon, Syringe } from 'lucide-react';"
);

// replace in array
const targetCondition = "{ icon: Star, title: t('home.botoxCosmetic'), desc: t('home.botoxCosmeticDesc'), slug: 'botox-eyelid-cosmetic-surgery-periocular-aesthetics' }";
const replaceCondition = "{ icon: Syringe, title: t('home.botoxCosmetic'), desc: t('home.botoxCosmeticDesc'), slug: 'botox-eyelid-cosmetic-surgery-periocular-aesthetics' }";

content = content.replace(targetCondition, replaceCondition);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx with Syringe icon');
