import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './CommentItem.module.scss';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Images";

const cx = classNames.bind(styles)


function CommentItem({ data = '' }) {
    const [isLikeCmt, setIsLikeCmt] = useState(false)
    const [countLikeCmt, setCountLikeCmt] = useState(71)

    const handleLikeCmt = () => {
        setIsLikeCmt(!isLikeCmt)
    }

    useEffect(() => {
        isLikeCmt ? setCountLikeCmt(pre => pre +1) : setCountLikeCmt(71)
    },[isLikeCmt])


    return (
        <div className={cx('wrapper')}>
            <div className={cx('account-cmt-info')}>
                <Image className={cx('avatar')} 
                    src=''
                    alt=''
                />
                <div className={cx('acc-cmt-box')}>
                    <Link className={cx('acc-link')}>
                        <h4 className={cx('nickname')}>Amh Thuấn</h4>
                    </Link>
                    <p className={cx('account-comment')}>
                        {data}
                    </p>
                    <div className={cx('cmt-info')}>
                        <p className={cx('cmt-time')}>10-2</p>
                        <button className={cx('reply-btn')}>Trả lời</button>
                    </div>
                </div>
                <div className={cx('func-btn')}>
                    <button className={cx('del-cmt-btn')}>
                        <svg className={cx('del-cmt-icon')} fill="currentColor" width="2.4rem" height="2.4rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"></path>
                        </svg>
                    </button>
                    <div className={cx('like-btn')} onClick={handleLikeCmt}>
                        <FontAwesomeIcon className={cx('like-icon')} 
                            icon={faHeart}
                            color={isLikeCmt && 'rgb(254, 44, 85)'}
                        />
                        {countLikeCmt}
                    </div>
                </div>
            </div>
            <div className={cx('cmt-reply')}>
                Xem thêm câu trả lời khác (3)
                <FontAwesomeIcon className={cx('angle-down')} icon={faAngleDown}/>
            </div>
        </div>
    );
}

export default CommentItem;