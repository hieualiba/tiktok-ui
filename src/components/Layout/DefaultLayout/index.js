import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/components/Layout/component/Header/index';
import Sidebar from './Sidebar/index';
import styles from './DefaultLayout.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('bottom-btn')}>
                <Button rounded>Tải ứng dụng</Button>
                <button className={cx('scroll-to-top-btn')}>
                    <svg width="16" height="16" viewBox="0 0 48 48" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"></path>
                        <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path>
                    </svg>
                </button>
            </div>
        </div>
     );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;