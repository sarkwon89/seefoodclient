import React from "react";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home row">
            <div className="col s4"></div>
            <div className="col s7">
                <h1 className="left-align title">SEEFOOD</h1>
                <div className="btnbox">
                <p className="left-align">Start your experience by clicking on the AR or QR button</p>
                <a target="_blank" href="https://rafaykhawar09.github.io/arTest/" className="waves-effect waves-light btn-large red accent-2"><i className="material-icons right">center_focus_strong</i>AR</a>
                {/* <input type="file" accept="image/*" capture="camera" /> */}
                <a target="_blank" href="https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html" className="waves-effect waves-light btn-large red accent-2" ><i className="material-icons right">camera_enhance</i>QR</a>
                </div>
            </div>
        </div>
    );
}

export default Home;