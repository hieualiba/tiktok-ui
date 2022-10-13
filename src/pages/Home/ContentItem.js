import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { faCircleCheck, faCommentDots, faHashtag, faHeart, faMusic, faShare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import React, {useEffect, useState} from 'react';
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles)

function ContentItem({ data = [] }) {
//Dùng useState để set State cho thằng bài viết đã like hay chưa.
const [isLike, setIsLike] = useState(false)
const [countLike, setCountLike] = useState(data.popular_video.likes_count) // có data rồi thì set giá trị khởi tạo là cái data đó luôn
const [isFollow, setIsFollow] = useState(false)

    const handleFollow = () => {
        setIsFollow(!isFollow)
    }

   
    const handleLike = () => {
        // khi click like => chạy func này => update lại state isLike
        setIsLike(!isLike) // ngược lại với like || ngược lại với chưa like
    }
    
    //check nếu state islike là true thì đổi màu
    //bây giờ check nếu like thì số lượng like sẽ + 1, và ngược lại
    useEffect(() => {
        isLike ? setCountLike(pre => pre +1 ) : setCountLike(data.popular_video.likes_count)
    },[isLike])
    
    //lifeCycle của anh đây, nếu isLike được cập nhật thì chạy vào hàm if kia, ko thì thôi. có cách làm khác gọn hơn nhưng em ví dụ luôn về life cycle
    // giờ nếu a muốn thoát ra vào lại nó không bị reset lại data ( mất like) thì anh lưu cái state isLike vào localStorage nhé.
    // keyword: how to use localStorage js


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
                        <button className={cx('like-btn','func-btn')}>
                            <span className={cx('action-icon')} onClick={handleLike}><FontAwesomeIcon color={isLike ? 'red' : undefined} className={cx('icon')} icon={faHeart}/></span> 
                            <strong>{countLike}</strong> 
                        </button>
                        <label htmlFor="comment-input-checkbox" className={cx('comment','func-btn')}>
                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')}  icon={faCommentDots}/></span>
                            <strong>{data.popular_video.comments_count}</strong> 
                        </label>
                        <input type='checkbox' id="comment-input-checkbox" className={cx('cmt-checkbox')} />
                        {/* comment overlay */}
                        <div className={cx('comment-overlay')}>
                            <div className={cx('video-box')}>
                                <div className={cx('video-background')}>
                                    <video className={cx('comment-video')}
                                        src={data.popular_video.file_url}
                                        autoPlay="autoplay"
                                        muted
                                        controls="control"
                                    ></video>
                                    
                                    <label htmlFor="comment-input-checkbox" className={cx('close-btn')}>
                                        <FontAwesomeIcon icon={faXmark} className={cx('close-icon')} />
                                    </label>
                                    <svg className={cx('logo')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="40" height="40" data-e2e="browse-logo">
                                        <g fillRule="evenodd" clipPath="url(#logo-icon_svg__a)" clipRule="evenodd">
                                            <path fill="#000" d="M0 36c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V12c0-6.628-5.373-12-12-12H12C5.373 0 0 5.372 0 12v24z"></path>
                                            <path fill="#25F4EE" d="M30.636 6.288A9.23 9.23 0 0130.35 4h-6.97v26.133c0 3.014-2.056 5.457-5.062 5.457-3.006 0-5.443-2.443-5.443-5.456 0-3.014 2.437-5.457 5.443-5.457.6 0 .797.098 1.337.278v-7.051c-.562-.079-.754-.12-1.337-.12C11.515 17.785 6 23.315 6 30.135c0 6.82 5.515 12.349 12.318 12.349 6.708 0 12.357-5.375 12.51-12.062V17.049c2.528 1.733 5.395 2.746 8.689 2.746V13.19c-4.275 0-7.866-2.933-8.88-6.902z"></path>
                                            <path fill="#fff" d="M33.12 8.77a9.23 9.23 0 01-.287-2.288h-6.971v26.134c0 3.014-2.055 5.456-5.061 5.456s-5.443-2.442-5.443-5.456a5.45 5.45 0 015.443-5.456c.6 0 .797.097 1.337.277v-7.05c-.562-.08-.754-.12-1.337-.12-6.803 0-12.318 5.529-12.318 12.349S13.998 44.965 20.8 44.965c6.707 0 12.357-5.374 12.51-12.062V19.531c2.528 1.733 5.395 2.747 8.689 2.747v-6.606c-4.275 0-7.866-2.933-8.88-6.901z"></path>
                                            <path fill="#FE2C55" d="M15.92 35.033a5.446 5.446 0 01-.562-2.416c0-3.014 2.437-5.457 5.443-5.457.523 0 .739.074 1.143.212l.194.066v-7.051l-.21-.03c-.411-.059-.623-.09-1.127-.09-.386 0-.769.018-1.146.053v4.635l-.194-.066c-.404-.138-.62-.212-1.143-.212-3.006 0-5.443 2.443-5.443 5.457a5.46 5.46 0 003.045 4.9zm-4.972 4.997a12.29 12.29 0 009.853 4.935c6.707 0 12.357-5.374 12.51-12.061V19.532c2.528 1.733 5.395 2.746 8.689 2.746v-6.605a9.2 9.2 0 01-2.483-.341v4.463c-3.294 0-6.161-1.013-8.69-2.746v13.372c-.152 6.688-5.802 12.062-12.509 12.062-2.763 0-5.314-.912-7.37-2.453zm23.455-28.401a9.206 9.206 0 01-3.715-5.146h2.145a9.155 9.155 0 001.57 5.146z"></path>
                                        </g><defs><clipPath id="logo-icon_svg__a"><rect width="48" height="48" fill="#fff" rx="10.5"></rect></clipPath></defs>
                                    </svg>
                                    <button className={cx('report-btn')}>
                                        <FontAwesomeIcon className={cx('report-icon')} icon={faFlag}/>
                                        <span>Report</span>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('comment-box')}>
                                <div className={cx('comment-content')}>
                                    <div className={cx('cmt-heading')}>
                                        <img className={cx('comment-avt')} 
                                            src={data.avatar} 
                                            alt={data.nickname}
                                        />

                                        <div className={cx('author-info')}>
                                            <Link className={cx('account-link')}>
                                                <strong className={cx('nickname')}>{data.nickname}</strong>
                                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                                            </Link>
                                            <div className={cx('author-desc')}>
                                                <h4 className={cx('name')}>{`${data.first_name} ${data.last_name}`}</h4>
                                                <span className={cx('dot')}>.</span>
                                                <span className={cx('time')}>2d ago</span>
                                            </div>
                                        </div>

                                        <span className={cx('follow-btn')} onClick={handleFollow}>
                                            {!isFollow ? <Button homeFollow small>Follow</Button> : <Button homeFollowing >Following</Button>}
                                        </span>
                                    </div>
                                    <div className={cx('cmt-info')}>
                                        <p className={cx('desc')}>
                                            {data.popular_video.description}
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
                                    </div>
                                    <div className={cx('cmt-func-btn')}>
                                        <button className={cx('like-btn','func-btn')}>
                                            <span className={cx('action-icon')} onClick={handleLike}><FontAwesomeIcon color={isLike ? 'red' : undefined} className={cx('icon')} icon={faHeart}/></span> 
                                            <strong>{countLike}</strong> 
                                        </button>
                                        <div className={cx('comment','func-btn')}>
                                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')}  icon={faCommentDots}/></span>
                                            <strong>{data.popular_video.comments_count}</strong> 
                                        </div>
                                    </div>
                                    <div className={cx('cmt-video-link')}>
                                        <p>{data.popular_video.file_url}</p>
                                        <button className={cx('copy-link')}>Copy link</button>
                                    </div>
                                </div>
                                <div className={cx('comment-item')}>
                                    
                                </div>

                                <div className={cx('cmt-input-wrapper')}>
                                    <div className={cx('cmt-input-box')}>
                                        <div className={cx('input-box')}>
                                            <input className={cx('cmt-input')} placeholder="Add comment..." />
                                            <span className={cx('cmt-input-icon')}>
                                                <svg height={22} width={22} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C28.0553 42 31.7921 40.6614 34.8006 38.401L35.6001 37.8003C36.0416 37.4686 36.6685 37.5576 37.0003 37.9992L38.2016 39.5981C38.5334 40.0397 38.4443 40.6666 38.0028 40.9983L37.2033 41.599C33.5258 44.3619 28.9513 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24V26C46 30.4843 42.1949 34 37.8438 34C35.1966 34 32.8496 32.7142 31.3935 30.733C29.5649 32.7403 26.9303 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 24.5814 33.9502 25.1528 33.8541 25.7096C33.8473 25.8052 33.8438 25.902 33.8438 26C33.8438 28.2091 35.6347 30 37.8438 30C40.1201 30 42 28.1431 42 26V24C42 14.0589 33.9411 6 24 6ZM24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30C26.9395 30 29.3891 27.8841 29.9013 25.0918C29.9659 24.7392 30 24.3744 30 24C30 20.6863 27.3137 18 24 18Z"></path>
                                                </svg>
                                            </span>
                                            <span className={cx('cmt-input-icon')}>
                                                <svg height={22} width={22} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24Z"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 23C18.6569 23 20 21.2091 20 19C20 16.7909 18.6569 15 17 15C15.3431 15 14 16.7909 14 19C14 21.2091 15.3431 23 17 23Z"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M31 23C32.6569 23 34 21.2091 34 19C34 16.7909 32.6569 15 31 15C29.3431 15 28 16.7909 28 19C28 21.2091 29.3431 23 31 23Z"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 28.3431C16 31.4673 19.5817 36 24 36C28.4183 36 32 31.4673 32 28.3431C32 25.219 16 25.219 16 28.3431Z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <button className={cx('post-btn')}>
                                            Post
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className={cx('share','func-btn')}>
                            <span className={cx('action-icon')}><FontAwesomeIcon className={cx('icon')} icon={faShare}/></span>
                            <strong>{data.popular_video.shares_count}</strong> 
                        </button>
                    </div>
                </div>
            </div>
            <span className={cx('follow-btn')} onClick={handleFollow}>
                {!isFollow ? <Button homeFollow small >Follow</Button> : <Button homeFollowing small >Following</Button>}
            </span>
        </div>
    );
}

export default ContentItem;