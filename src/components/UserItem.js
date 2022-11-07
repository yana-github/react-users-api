const UserItem = (props) => {
    const {name} = props;
    const {city } = props.address;


    return (
        <>
        <h3>{name}</h3>
        </>
    )
}

export default UserItem;