import fs from 'fs';

let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const reviewBlock = `
            <a 
              href="https://g.page/r/CW3TPEeu5H1WEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex flex-col sm:flex-row items-center gap-3 p-5 bg-gold/5 hover:bg-gold/10 border border-gold/20 hover:border-gold/40 rounded-xl transition-all duration-300 group justify-center text-center shadow-sm w-full"
            >
              <div className="p-2.5 rounded-lg bg-gold/10 text-gold group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <span className="font-bold text-navy text-sm block">{language === 'en' ? 'Leave us a Google Review' : 'Google पर हमें रेट करें'}</span>
                <span className="text-[10px] text-navy/50 font-medium block uppercase tracking-wider">{language === 'en' ? 'Share your experience' : 'अपना अनुभव साझा करें'}</span>
              </div>
            </a>`;

if (contactCode.includes(reviewBlock)) {
    // 1. Remove the review block
    contactCode = contactCode.replace(reviewBlock, "");

    // 2. Insert below Commitment Card
    const targetEndStr = `            <p className="text-xs font-semibold text-gold uppercase tracking-widest">
              {t('home.location')}
            </p>
          </motion.div>
`;
    
    // Create a version of the review block scaled correctly for full-width or placed neatly
    // Actually we can place it below motion.div of commitment card or inside it?
    // Let's put it as a separate element below the commitment card, in a motion.div that spans full width
    const newReviewBlock = `          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-12 w-full max-w-5xl mx-auto mt-4"
          >
            <a 
              href="https://g.page/r/CW3TPEeu5H1WEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-center gap-3 p-5 bg-white hover:bg-gold/5 border border-gold/20 hover:border-gold/40 rounded-3xl transition-all duration-300 group justify-center text-center shadow-md w-full"
            >
              <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <span className="font-bold text-navy text-base sm:text-lg block">{language === 'en' ? 'Leave us a Google Review' : 'Google पर हमें रेट करें'}</span>
                <span className="text-xs text-navy/50 font-medium block uppercase tracking-wider mt-1">{language === 'en' ? 'Share your experience' : 'अपना अनुभव साझा करें'}</span>
              </div>
            </a>
          </motion.div>
`;

    contactCode = contactCode.replace(targetEndStr, targetEndStr + newReviewBlock);
    
    fs.writeFileSync('src/pages/Contact.tsx', contactCode);
    console.log("Moved Google Review block");
} else {
    console.log("Could not find the Google review block exactly as string.");
}
