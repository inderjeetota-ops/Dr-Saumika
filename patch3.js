import fs from 'fs';
let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const targetRegex = /<\/form>\n\s*<\/div>\n\s*<\/motion\.div>\n\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*\);\n}/;

const commitmentCardStr = `
          {/* Commitment Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] text-white p-8 sm:p-10 lg:p-12 border border-gold/15 rounded-3xl shadow-2xl relative overflow-hidden mt-10 mx-auto max-w-5xl"
          >
            {/* Elegant Design Accent Details */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/25 text-gold mb-6">
              <Shield className="h-6 w-6 text-gold animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gold tracking-tight">{t('home.commitmentTitle')}</h2>
            
            <p className="text-sm leading-relaxed text-ivory-dark/85 font-light mb-6 max-w-2xl mx-auto">
              {t('home.commitmentDesc')}
            </p>
            
            <div className="w-12 h-[1.5px] bg-gold/30 mb-6" />
            
            <p className="text-xs font-semibold text-gold uppercase tracking-widest">
              {t('home.location')}
            </p>
          </motion.div>
`;

const replacement = `              </form>
            </div>
          </motion.div>
${commitmentCardStr}
        </div>
      </div>
    </div>
  );
}`;

if (targetRegex.test(contactCode)) {
  contactCode = contactCode.replace(targetRegex, replacement);
  fs.writeFileSync('src/pages/Contact.tsx', contactCode);
  console.log('patched contact page 3');
} else {
  console.log('could not find target in contact page using regex');
}
