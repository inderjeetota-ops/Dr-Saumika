import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const targetStr = `          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 max-w-4xl mx-auto flex flex-col justify-center text-center items-center h-full"
          >
            <div>
              {/* Premium Specialist Badge */}`;

const replaceStr = `          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 max-w-4xl mx-auto flex flex-col justify-center text-left items-start h-full w-full"
          >
            <div className="w-full">
              {/* Premium Specialist Badge */}`;

if(content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/pages/Home.tsx', content);
  console.log('Successfully patched Home.tsx');
} else {
  console.log('Target string not found in Home.tsx');
}
