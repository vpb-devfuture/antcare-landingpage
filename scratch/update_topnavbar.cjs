const fs = require('fs');

let content = fs.readFileSync('src/components/TopNavBar.jsx', 'utf-8');

// 1. Remove elderly_care special subdued styling, make all items clean font-medium
const oldLinkClass = `className={\`group flex items-center gap-1 px-3 py-2 rounded-full transition-all \${
                    item.id === 'elderly_care' 
                      ? 'text-plum-deep/70 hover:text-plum-deep hover:bg-plum-deep/5 text-[14px] font-normal' 
                      : 'text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 text-[15px] font-medium'
                  }\`}`;

const newLinkClass = `className="group flex items-center gap-1 px-3 py-2 rounded-full transition-all text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 text-[15px] font-medium"`;

content = content.replaceAll(oldLinkClass, newLinkClass);

// 2. Remove desktop preorder button
const oldDesktopButton = `          {/* Desktop: Preorder CTA + Hotline + Language (right) */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <a
              href="/#dang-ky"
              onClick={(e) => handleNavClick(e, '/#dang-ky')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-earth-orange-bright text-white text-[14px] font-bold shadow-xs hover:bg-earth-orange-dark hover:shadow-md transition-all duration-300"
            >
              <span>{t('menu.preorder', 'Nhận thông tin ra mắt')}</span>
            </a>`;

const newDesktopButton = `          {/* Desktop: Hotline + Language (right) */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">`;

content = content.replace(oldDesktopButton, newDesktopButton);

// 3. Remove mobile preorder button
const oldMobileButton = `          {/* Quick preorder button on mobile */}
          <div className="mb-3">
            <a
              href="/#dang-ky"
              onClick={(e) => { handleNavClick(e, '/#dang-ky'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-earth-orange-bright text-white text-sm font-bold shadow-xs active:scale-98 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">notifications_active</span>
              <span>{t('menu.preorder', 'Nhận thông tin ra mắt')}</span>
            </a>
          </div>`;

content = content.replace(oldMobileButton, '');

// 4. Update mobile menuIcons for elderly_care
const oldMenuIcons = `              const menuIcons = {
                services: 'medical_services',
                products: 'inventory_2',
                about: 'info',
                contact: 'support_agent',
                handbook: 'menu_book',
                news: 'newspaper',
                activities: 'volunteer_activism'
              };`;

const newMenuIcons = `              const menuIcons = {
                services: 'medical_services',
                elderly_care: 'medical_services',
                products: 'inventory_2',
                about: 'info',
                contact: 'support_agent',
                handbook: 'menu_book',
                news: 'newspaper',
                activities: 'volunteer_activism'
              };`;

content = content.replace(oldMenuIcons, newMenuIcons);

fs.writeFileSync('src/components/TopNavBar.jsx', content);
console.log('Successfully updated TopNavBar.jsx');

