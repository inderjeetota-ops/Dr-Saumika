import fs from 'fs';
// Contact.tsx modifications
let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contactCode = contactCode.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, Shield } from 'lucide-react';");

const targetContact = `              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}`;

const commitmentCardStr = `
          {/* Commitment Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] text-white p-8 sm:p-10 lg:p-12 border border-gold/15 rounded-2xl shadow-2xl relative overflow-hidden mt-10 mx-auto"
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
          </motion.div>`;

const replacementContact = `              </form>
            </div>
          </motion.div>
        </div>${commitmentCardStr}
      </div>
    </div>
  );
}`;

if (contactCode.includes(targetContact)) {
  contactCode = contactCode.replace(targetContact, replacementContact);
  fs.writeFileSync('src/pages/Contact.tsx', contactCode);
  console.log('patched contact page');
} else {
  console.log('could not find target in contact page');
}

// Home.tsx modifications
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');
const targetHome = `          {/* Commitment Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] text-white p-8 sm:p-10 lg:p-12 order-last lg:ml-auto max-w-xl lg:max-w-md w-full border border-gold/15 rounded-3xl shadow-2xl relative overflow-hidden mt-8 lg:mt-0 mx-auto lg:mx-0"
          >
            {/* Elegant Design Accent Details */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/25 text-gold mb-6">
              <Shield className="h-6 w-6 text-gold animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gold tracking-tight">{t('home.commitmentTitle')}</h2>
            
            <p className="text-sm leading-relaxed text-ivory-dark/85 font-light mb-6">
              {t('home.commitmentDesc')}
            </p>
            
            <div className="w-12 h-[1.5px] bg-gold/30 mb-6" />
            
            <p className="text-xs font-semibold text-gold uppercase tracking-widest">
              {t('home.location')}
            </p>
          </motion.div>`;

if (homeCode.includes(targetHome)) {
  homeCode = homeCode.replace(targetHome, '');
  // optionally change lg:col-span-7 to lg:col-span-12 or leave as is. Since we removed the right col, we should center the left or let it take full width.
  // wait, the left side has max-w-3xl. We can center it.
  homeCode = homeCode.replace('className="lg:col-span-7 max-w-3xl flex flex-col justify-between h-full"', 'className="lg:col-span-12 max-w-4xl mx-auto flex flex-col justify-center text-center items-center h-full"');
  homeCode = homeCode.replace('className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-6 mb-2 sm:mb-6 w-full"', 'className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-2 sm:mb-6 w-full"');
  homeCode = homeCode.replace('className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl"', 'className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl"');
  homeCode = homeCode.replace('className="mb-8 bg-gold/5 backdrop-blur-md p-5 rounded-2xl border border-gold/20 shadow-sm max-w-xl relative overflow-hidden group"', 'className="mb-8 bg-gold/5 backdrop-blur-md p-5 rounded-2xl border border-gold/20 shadow-sm max-w-2xl relative overflow-hidden group w-full"');
  
  fs.writeFileSync('src/pages/Home.tsx', homeCode);
  console.log('patched home page');
} else {
  console.log('could not find target in home page');
}

