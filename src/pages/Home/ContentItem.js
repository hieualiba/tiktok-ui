import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { faCircleCheck, faCommentDots, faHashtag, faHeart, faMusic, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function ContentItem({ data = [] }) {
    return (
        <div className={cx('content-item')}>
            <img className={cx('avatar')} 
                src={data.avatar} 
                alt={data.nickname}
            />
            <div className={cx('item-desc')}>
                <Link className={cx('account-link')}>
                    <strong className={cx('nickname')}>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                    <h4 className={cx('name')}>{`${data.first_name} ${data.last_name}`}</h4>
                </Link>
                <p className={cx('desc')}>
                    {data.popular_video.description}
                    <Link className={cx('hashtag-link')}>
                        <strong className={cx('hashtag')}>
                            <FontAwesomeIcon icon={faHashtag} />
                            <span>hashtag</span>
                        </strong>
                    </Link>
                    <Link className={cx('hashtag-link')}>
                        <strong className={cx('hashtag')}>
                            <FontAwesomeIcon icon={faHashtag} />
                            <span>hashtag</span>
                        </strong>
                    </Link>
                    <Link className={cx('hashtag-link')}>
                        <strong className={cx('hashtag')}>
                            <FontAwesomeIcon icon={faHashtag} />
                            <span>hashtag</span>
                        </strong>
                    </Link>
                    <Link className={cx('bg-music')}>
                        <span><FontAwesomeIcon icon={faMusic}/></span>
                        <strong>{data.popular_video.music}</strong>
                    </Link>
                </p>
                <div className={cx('action-video')}>
                    <video className={cx('video')}
                        src={data.popular_video.file_url}
                        autoPlay="autoplay"
                        muted
                        controls="control"
                        width={268}
                        height={468}
                    ></video>
                    <div className={cx('action-btn')}>
                        <button className={cx('like','func-btn')}>
                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')} icon={faHeart}/></span>
                            <strong>{data.popular_video.likes_count}</strong> 
                        </button>
                        <button className={cx('comment','func-btn')}>
                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')} icon={faCommentDots}/></span>
                            <strong>{data.popular_video.comments_count}</strong> 
                        </button>
                        <button className={cx('share','func-btn')}>
                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')} icon={faShare}/></span>
                            <strong>{data.popular_video.shares_count}</strong> 
                        </button>
                    </div>
                </div>
            </div>
            <span className={cx('follow-btn')}><Button homeFollow small >Follow</Button></span>
        </div>
    );
}

export default ContentItem;