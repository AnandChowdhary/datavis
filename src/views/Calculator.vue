<template>
  <div>
    <h1>Calculator</h1>
    <form>
      <label>
        <span>Country</span>
        <select v-model="country">
          <option v-for="(option, index) in countryOptions" :value="index" :key="`p_${index}`">{{ option }}</option>
        </select>
      </label>
      <label>
        <span>Age</span>
        <input type="number" v-model="age">
      </label>
    </form>
    <div>
      <p>Your suicide chance is</p>
      <div class="chance">{{ chance }}%</div>
    </div>
    <div class="info">
      <p>Seriously, though. Suicide is not a joke.</p>
      <div>If you or anyone you know have suicidal thoughts, <a href="https://save.org/find-help/">click here to find help</a> regarding suicide prevention.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: 42,
      age: 21,
      countryOptions: ["Lithuania", "Russia", "Guyana", "South Korea", "Belarus", "Suriname", "Kazakhstan", "Ukraine", "Latvia", "Lesotho", "Belgium", "Hungary", "Slovenia", "Japan", "Uruguay", "Estonia", "France", "Switzerland", "Croatia", "Equatorial Guinea", "India", "Poland", "Moldova", "Finland", "Serbia", "Austria", "United States", "Sweden", "Sri Lanka", "Thailand", "Kiribati", "Portugal", "Iceland", "Cuba", "El Salvador", "Trinidad And Tobago", "Germany", "Luxembourg", "Australia", "Mongolia", "Slovakia", "Denmark", "Netherlands", "Canada", "Norway", "Nicaragua", "Cameroon", "Bolivia", "New Zealand", "Haiti", "South Africa", "Ireland", "Bulgaria", "Bhutan", "Cape Verde", "Zimbabwe", "Chile", "Romania", "Montenegro", "Uganda", "Singapore", "Dominican Republic", "Benin", "Sierra Leone", "China", "Togo", "Paraguay", "Nigeria", "Seychelles", "Botswana", "Argentina", "Burundi", "Nepal", "Chad", "Bosnia And Herzegovina", "Spain", "Namibia", "Laos", "Yemen", "Kyrgyzstan", "Italy", "Georgia", "Sudan", "Eritrea", "Costa Rica", "Saint Lucia", "Mauritius", "Myanmar", "Burkina Faso", "Central African Republic", "Malta", "Uzbekistan", "Turkey", "Vietnam", "Ethiopia", "Colombia", "Gabon", "Ecuador", "Liberia", "Comoros", "Turkmenistan", "Rwanda", "Djibouti", "Qatar", "Armenia", "Brazil", "Guinea", "Albania", "Zambia", "Senegal", "Papua New Guinea", "Republic Of The Congo", "Bangladesh", "Bahrain", "Dr Congo", "Malaysia", "Tanzania", "Israel", "Ghana", "Cyprus", "Cambodia", "Libya", "Mexico", "Gambia", "Greece", "Fiji", "Peru", "Mozambique", "Mali", "Somalia", "Solomon Islands", "Belize", "Angola", "Afghanistan", "Timor Leste", "Niger", "Brunei", "Vanuatu", "Samoa", "Mauritania", "Panama", "Iran", "Egypt", "Guinea Bissau", "Oman", "Madagascar", "Venezuela", "South Sudan", "Malawi", "Tonga", "Tunisia", "Indonesia", "Lebanon", "Saudi Arabia", "Philippines", "Kenya", "Algeria", "Iraq", "Pakistan", "Morocco", "Jordan", "Honduras", "United Arab Emirates", "Guatemala", "Azerbaijan", "Tajikistan", "Saint Vincent And The Grenadines", "Sao Tome And Principe", "Maldives", "Kuwait", "Jamaica", "Syria", "Grenada", "Bahamas", "Barbados", "Antigua And Barbuda"],
      rates: [31.9, 31, 29.2, 26.9, 26.2, 22.8, 22.5, 22.4, 21.2, 21.2, 20.7, 19.1, 18.6, 18.5, 18.4, 17.8, 17.7, 17.2, 16.5, 16.4, 16.3, 16.2, 15.9, 15.9, 15.6, 15.6, 15.3, 14.8, 14.6, 14.4, 14.4, 14, 14, 13.9, 13.7, 13.6, 13.6, 13.5, 13.2, 13, 12.8, 12.8, 12.6, 12.5, 12.2, 12.2, 12.2, 12.2, 12.1, 11.7, 11.6, 11.5, 11.5, 11.4, 11.3, 10.7, 10.6, 10.4, 10.3, 9.9, 9.9, 9.9, 9.9, 9.7, 9.7, 9.6, 9.5, 9.5, 9.3, 9.3, 9.2, 9.1, 8.8, 8.8, 8.8, 8.7, 8.7, 8.6, 8.5, 8.3, 8.2, 8.2, 8.1, 7.9, 7.9, 7.8, 7.8, 7.8, 7.7, 7.7, 7.5, 7.4, 7.3, 7.3, 7.2, 7.2, 7.1, 7.1, 6.8, 6.8, 6.7, 6.7, 6.7, 6.6, 6.6, 6.5, 6.3, 6.3, 6.1, 6, 6, 5.9, 5.9, 5.9, 5.7, 5.5, 5.4, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.9, 4.8, 4.7, 4.7, 4.7, 4.7, 4.7, 4.6, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.1, 4, 4, 3.9, 3.9, 3.7, 3.7, 3.7, 3.5, 3.4, 3.4, 3.3, 3.2, 3.2, 3.2, 3.2, 3, 2.9, 2.9, 2.9, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4, 2.3, 2.3, 2.3, 2.2, 1.9, 1.7, 1.7, 0.8, 0.5]
    }
  },
  computed: {
    chance() {
      return (Math.min(100, (this.rates[this.country] / 100000) + ((this.age / 1000) * Math.random()))).toFixed(6);
    }
  }
}
</script>


<style lang="scss" scoped>
a {
  color: inherit;
}
div {
  max-width: 600px;
  margin: auto;
}
form {
  margin-bottom: 2rem;
}
.chance {
  font-weight: bold;
  line-height: 1;
  font-size: 300%;
}
label {
  display: block;
  margin-bottom: 1rem;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
}
input, select {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  padding: 0.5rem;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.info {
  margin-top: 3rem;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0.2rem;
  padding: 1rem;
  p {
    margin-top: 0;
  }
}
</style>
