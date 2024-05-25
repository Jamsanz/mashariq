import * as Menubar from '@radix-ui/react-menubar';
import { useState } from 'react';
import { CaretDownIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { i18n, t } = useTranslation();
  
  const toggle = () => setOpen(!open);
  const close = () => open && setOpen(false);
  
  const handleOnChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    close();
    location.reload();
  }
  

  return (
    <Menubar.Root
      className={`responsive-header ${open
          ? 'fixed top-0 w-full md:relative md:w-full text-black bg-white'
            : 'text-white'
        }`}
      data-testid="header"
    >
      <Link to="/" className="lg:ml-[46px] font-workSans">
        {/* <img src="/assets/dlho-logo6.png" className="w-[64px] md:w-[100px]" alt="DLHO Logo" /> */}
        Mashariq
      </Link>
      {/* Mobile menu Icons/buttons */}
      <HamburgerMenuIcon
        data-testid="open-menu"
        onClick={toggle}
        className={`${open ? 'hidden' : 'text-white'} w-6 h-6 md:hidden`}
      />
      <Cross1Icon
        data-testid="close-menu"
        onClick={toggle}
        className={`${open ? '' : 'hidden'} w-6 h-6 md:hidden flip-in-hor-top`}
      />

      {/* Navigation */}
      <NavigationMenu.Root
        className={`navigation-menu slide-in-top-mobile bg-transparent ${open ? 'block background-blur' : 'hidden md:flex'
          }`}
        role="navigation"
      >
        <NavigationMenu.List
          className={`navigation-list ${open ? 'bg-white text-black' : ''}`}
        >
          <NavigationMenu.Item className='hover:border-b-2 hover:-mt-1'>
            <NavigationMenu.Link asChild>
              <Link onClick={toggle} to="/">
                {t('home')}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='hover:border-b-2 hover:-mt-1'>
            <NavigationMenu.Link asChild>
              <a href="#about-us" onClick={close}>
                {t('about_us')}
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="relative md:static">
            <NavigationMenu.Trigger
              data-testid="navigation-trigger"
              className="inline-flex group items-center gap-[2px] hover:border-b-2 hover:-mt-1"
            >
              {t('services')}
              <CaretDownIcon className="custom-rotate-180" aria-hidden />
            </NavigationMenu.Trigger>
            {/* Services Drop down content */}
            <NavigationMenu.Content
              className="absolute top-8 md:left-16 sm:w-auto"
            >
              <NavigationMenu.Sub defaultValue="sub1">
                <NavigationMenu.List className="bg-white rounded text-black py-2 md:py-0 overflow-hidden soft-shadow  flex flex-col">
                  <NavigationMenu.Item value="sub1">
                    <NavigationMenu.Link asChild>
                      <Link
                        to={'/softwaredev'}
                        onClick={close}
                        className={`flex gap-x-4 hover:bg-black hover:text-white px-6 sm:px-6 py-2 sm:py-[14px]`}
                      >
                        {/* <img src="/assets/icons/cpu-setting-icon.svg" alt="navLink icon" /> */}
                        Service lorem ipsum 1
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub2">
                    <NavigationMenu.Link asChild>
                      <Link
                        to={'/devops-consulting'}
                        onClick={close}
                        className={`flex gap-x-4 hover:bg-black hover:text-white px-6 sm:px-6 py-2 sm:py-[14px]`}
                      >
                        {/* <img src="/assets/icons/layer-icon.svg" alt="navLink icon" /> */}
                        Service lorem ipum 2
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item value="sub3">
                    <NavigationMenu.Link asChild>
                      <Link
                        to={'/devops-consulting'}
                        onClick={close}
                        className={`flex gap-x-4 hover:bg-black hover:text-white px-6 sm:px-6 py-2 sm:py-[14px]`}
                      >
                        {/* <img src="/assets/icons/layer-icon.svg" alt="navLink icon" /> */}
                        Service lorem ipsum 3
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='hover:border-b-2 hover:-mt-1 md:hidden 2xl:block'>
            <NavigationMenu.Link asChild>
              <Link to="/meet-the-team" onClick={close}>
                {t('tech_soln')}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='hover:border-b-2 hover:-mt-1 md:hidden 2xl:block'>
            <NavigationMenu.Link asChild>
              <Link to="/meet-the-team" onClick={close}>
                {t('awareness')}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='hover:border-b-2 hover:-mt-1'>
            <NavigationMenu.Link className="" asChild>
              <Link data-testid="contact-us-link" to="contact-us" onClick={close}>
                {t('contact')}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className=''>
            <NavigationMenu.Link className=" hover:bg-white hover:text-black rounded-full border py-2 px-3" asChild>
              <Link data-testid="contact-us-link" to={"#"} onClick={handleOnChangeLanguage}>
                {i18n.language === 'en' ? 'Arabic' : 'English'}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Menubar.Root>
  );
};

export default Header;
