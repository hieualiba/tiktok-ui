import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be0edfd948ad524bc75b58b475d72db4~c5_300x300.webp?x-expires=1663905600&x-signature=hM4IY3yrgGiG9uoX9dvuR3iAt44%3D" alt="haichieu" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    haichieu
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <p className={cx('name')}>Đặng Nam Hải Triều</p>
            </div>
        </div>
    );
}

export default AccountItem;