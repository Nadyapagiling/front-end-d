const ambilDataUser = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        response.data.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('Error:', error); 
    }
};


ambilDataUser();

