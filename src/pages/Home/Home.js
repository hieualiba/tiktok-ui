import classNames from "classnames/bind";
import styles from './Home.module.scss';
import ContentItem from "./ContentItem";
import { useEffect, useState } from "react";
import * as userService from '~/services/userService';


const cx = classNames.bind(styles);


function Home() {
    const [suggestItem, setSuggestItem] = useState([])

    useEffect(() => {
        userService.getSuggested({page: 1, perPage: 10})
        .then((data) => 
            setSuggestItem(data)
        )
        .catch((error) => console.log(error))
    },[page])

    return (
        <div className={cx('wrapper')}>
            {suggestItem.length >0 && suggestItem.map(acc =>(
                <ContentItem key={acc.id} data={acc} />
            ))}
        </div>
    )
}

export default Home;




