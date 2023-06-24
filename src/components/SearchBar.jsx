

const SearchBar = (props) => {

    // eslint-disable-next-line react/prop-types
    const {location, setLocation, searchLocation} = props;
    console.log(location);
    // const [location, setLocation] = useState('');

    // const handleInputChange = (event) => {
    //     setLocation(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     onSearch(location);
    // };

    // const [data, setData] = useState({});
    // const [location, setLocation] = useState('');

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

    // const searchLocation = (event) => {
    //     if (event.key === 'Enter') {
    //         axios.get(url).then((response) => {
    //             setData(response.data)
    //             console.log(response.data)
    //         })
    //         setLocation('')
    //     }
    // }

    return (
        // <form onSubmit={handleSubmit}>
        //   <input
        //     type="text"
        //     placeholder="Enter location"
        //     value={location}
        //     onChange={handleInputChange}
        //   />
        //   <button type="submit">Search</button>
        // </form>



        <div className="search">
            <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text" />
        </div>
    );
};

export default SearchBar;
