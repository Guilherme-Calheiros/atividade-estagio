import FormButton from "./FormButton";

function MainContent() {
  return (
    <div className="d-flex flex-column align-items-end h-75 mx-5 justify-content-center text-end content">
      <h1 className="primary-font font-xl" style={{lineHeight: 0.6}}>It's time!</h1>
      <h2 className="bebasneue-book font-lg">the new road it's beginning</h2>
      <p className="secondary-font text-end text-white col-12 col-sm-6 font-md">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
      <FormButton />
    </div>
  );
}

export default MainContent;