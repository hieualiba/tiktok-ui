import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';


const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue,500)

    const inputRef = useRef()

    useEffect(() => {
        if(!debounced.trim()) { // nếu ko có kí tự tìm kiếm và trim space 2 đầu
            setSearchResult([]);
            return; 
        }

        const fetchApi = async () => { 
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);
            
            setLoading(false);
        }

        fetchApi();

    },[debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false)
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith('')) {
            setSearchValue(searchValue);
        }
    };


    return ( 
        <div>
            <HeadlessTippy 
                interactive
                visible = {showResult && searchResult.length > 0}
                render={attrs => (
                    <div className = {cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-account')}>Accounts</h4>
                            {searchResult.map((result) =>
                            <AccountItem key={result.id} data={result} />
                            )}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input 
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')} 
                        placeholder="Tìm kiếm tài khoản và video" 
                        spellCheck={false} 
                        onChange= {handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear} >
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;