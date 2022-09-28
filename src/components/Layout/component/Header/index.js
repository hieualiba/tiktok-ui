import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from "~/assets/images";
import AccountItem from '~/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'Tiếng Việt',
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
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },0)
    },[])

    return (
    <header className = {cx('wrapper')} >
        <div className = {cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </div>
            <div className={cx('search')}>
                <Tippy 
                    interactive
                    visible = {searchResult.length > 0}
                    render={attrs => (
                        <div className = {cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-account')}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}>
                    <input className={cx('search-input')} placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                </Tippy>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
            <div className={cx('actions')}>
                <Button text leftIcon = {<FontAwesomeIcon icon={faPlus}/>}>
                    Tải lên
                </Button>
                <Button primary>Đăng Nhập</Button>

                <Menu
                    items={MENU_ITEMS}
                >
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </header>
    );
}

export default Header;