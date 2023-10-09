function beltType() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <label>Belts</label>
    <select id="beltType" name="Belts" > 
        <option value="" selected disabled>Velg belte</option>
        <option value="yellow">gul</option>
        <option value="green">grønn</option>
        <option value="orange">oransj</option>
        <option value="blue">blå</option>
        <option value="black">sort</option>
    </select>

    `;
}