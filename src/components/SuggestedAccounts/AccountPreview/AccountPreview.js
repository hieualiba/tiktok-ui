import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className = {cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665198000&x-signature=afW5JuEOUiszkDXp7vAqaLFQEA4%3D' alt='' />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>theanh28entertainment</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>7.5M</strong>
                    <span className={cx('lable')}>Follower</span>
                    <strong className={cx('value')}>518.7M</strong>
                    <span className={cx('lable')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {

}
export default AccountPreview;