export default function handleCheckbox({
  outings,
  value,
  checked
}) {
  let elementsIndex;
  console.log(this.state.outings);
  let arrayForm = outings.find(item => item.activity === value); //verifies activities have been selected

  let filteredOutingsArray = outings.filter(x => x.isPicked === true); //sets IsPicked to true in chosen objects

  if (checked) {
    elementsIndex = outings.map(x => {
      if (x.id === arrayForm.id) {
        x.isPicked = true;
      }

      return x;
    }); //this.setState({outings: elementsIndex});
    // this.setState({numOfOutings: filteredOutingsArray.length})
  } //sets IsPicked to false in unchosen objects
  else {
      elementsIndex = outings.map(x => {
        if (x.id === arrayForm.id) {
          x.isPicked = false;
        }

        return x;
      }); //this.setState({outings: elementsIndex});
    }

  return elementsIndex;
}