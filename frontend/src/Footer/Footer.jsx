import React, { useState } from "react";
import "./footer.css";

export default function Footer({ host }) {
  const [numDocuments, updateNumDocuments] = useState("?");
  fetch(host+"/countDocuments")
    .then(r => r.json())
    .then(data => {
      updateNumDocuments(data.numDocuments)
    })
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-text-col">
          <Text numDocuments={numDocuments} />
        </div>
        <div className="footer-img-col">
          <img alt="" src="./img/icon.svg" className="footer-icon" />
        </div>
      </div>
    </div>
  );
}

function Text({ numDocuments }) {
  const makerComponent = (
    <>
      <MakerLink name="Sahil" link="https://twitter.com/sahil_sk11" />
      ,&nbsp;<MakerLink name="Saaniya" link="https://twitter.com/saaniya_kapur" />
      , and <MakerLink name="Sameer" link="https://twitter.com/sameerskapur" /> (not related)

    </>
  );
  const betaComponent = <a className="maker-link" href="#">Our 50+ beta testers</a>
  const howItsMade = <a className="maker-link" href="#">Check out this post</a>
  const privacy = <a className="maker-link" href="#">Privacy Policy</a>
  return (
    <div>
      <Pair keyName="Special Thanks" value={betaComponent} />
      <Pair keyName="Makers" value={makerComponent} />
      <Pair keyName="How we Made This" value={howItsMade} />
      <Pair keyName="Fine Print" value={privacy} />
      <Pair keyName="Resumes Processed" value={numDocuments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
      <em><p style={{ fontFamily: "Inter", marginTop: "40px" }}>Copyright © 2021 Glide. All rights reserved.</p></em>
    </div>
  );
}

function MakerLink({ name, link }) {
  return (
    <a href={link} target="_blank" className="maker-link">{name} Kapur</a>
  )
}

function Pair({ keyName, value }) {
  return (
    <>
      <p className="footer-text">
        <b className="footer-key">{keyName}:&nbsp;</b>
        {value}
      </p>
    </>
  )
}