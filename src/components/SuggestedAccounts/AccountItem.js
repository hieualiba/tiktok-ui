import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '../Images';


const cx = classNames.bind(styles)

function AccountItem({ data }) {

    const renderPreview = attrs => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    )
    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 200]}
                placement='bottom'
                offset={[-184,-8]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')} 
                        src={data.avatar} 
                        alt={data.nickname} 
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                            )}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default AccountItem;