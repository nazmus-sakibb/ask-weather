
const SearchBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const {location, setLocation, searchLocation} = props;

    return (
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
