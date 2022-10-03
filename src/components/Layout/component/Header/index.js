import Tippy from '@tippyjs/react';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faEarthAsia, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'; // optional

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from "~/assets/images";
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Images';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [    // menu cấp 1
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'Tiếng Việt',
        children: {     //menu cấp 2
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const curentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
            break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'Xem hồ sơ',
            to: '/@chauanh221'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok}/>,
            title: 'Nhận xu',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Cài đặt',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
    <header className = {cx('wrapper')} >
        <div className = {cx('inner')}>
            <Link to={routesConfig.home} className={cx('logo-link')}>
                <img src={images.logo} alt="Tiktok" />
            </Link>
            
            <Search/>

            <div className={cx('actions')}>
                {curentUser ? (
                    <>
                        <Button text leftIcon = {<FontAwesomeIcon icon={faPlus}/>}>
                            Tải lên
                        </Button>
                        <Tippy /* trigger='click' */ content="Tin nhắn" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"></path>
                                </svg>
                            </button>
                        </Tippy>
                        <Tippy content="Hộp thư" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"></path>
                                </svg>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text leftIcon = {<FontAwesomeIcon icon={faPlus}/>}>
                            Tải lên
                        </Button>
                        <Button primary>Đăng Nhập</Button>
                    </>
                )}
                <Menu items={curentUser ? userMenu : MENU_ITEMS} onChange = {handleMenuChange}>
                    {curentUser ? (
                            <Image className={cx('user-avt')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ed88ec6f6aaa95ec7f2b29a9d64f808~c5_100x100.jpeg?x-expires=1664164800&x-signature=ntU%2FbTP%2FAnTr5XwI4nqPtodQSUg%3D" alt="Vu Thi Minh Anh"/>
                    ) : (
                        <Tippy>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        </Tippy>
                    )}
                </Menu>
            </div>
        </div>
    </header>
    );
}

export default Header;