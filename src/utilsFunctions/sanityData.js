export const userQuery = (userID)=>{
    const query = `*[_type == "user" && _id == '${userID}']`;

    return query;
}

 //* in front of searchterm mean that it will begin search term even before finished
export const searchQuery = (searchTerm)=>{
    const query =`*[_type == "pin" && title match "${searchTerm}" 
            || category match "${searchTerm}*" || about match "${searchTerm}*"]{ 
                image {
                    asset -> {
                        url
                    }
                },
                _id,
                destination,
                postedBy ->{
                    _id,
                    username,
                    image
                },
                save[]{
                    _key,
                    postedBy ->{
                        _id,
                        username,
                        image
                    }
                },
            }`

    return query;
}

export const feedQuery= `*[_type =="pin"] | order(_createAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy ->{
        _id,
        username,
        image
    },
    save[]{
        _key,
        postedBy ->{
            _id,
            username,
            image
        }
    },
}`