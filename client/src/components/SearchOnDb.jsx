
const SearchOnDb = ({ searchInput, handleSearchInputChange, handleSubmit }) => {
	return (
		<div className=" search-wrapper">
			<div className="">
				<form className="search-box" onSubmit={handleSubmit}>
					<label htmlFor="title" id="">
						<input
							type="text"
							id="title"
							className=""
							placeholder="job title"
							value={searchInput}
							onChange={handleSearchInputChange}
						/>
					</label>
					<button className="">Search button </button>
				</form>
			</div>
		</div>
	);
};

export default SearchOnDb;
