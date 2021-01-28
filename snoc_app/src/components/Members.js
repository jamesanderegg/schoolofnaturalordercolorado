import React from "react"
import MembersPicture from "./membersPicture"

function Members() {
  return (
    <div className="members">
      <h2
        style={{
          textAlign: "center",
          padding: "20px",
          color: "rgb(252, 221, 155)",
          textDecoration: "underline",
        }}
      >
        SNOC Members
      </h2>
      <MembersPicture filename="members.jpg" />
      <div className="members-top">
        <div className="note-item">
          <h4 className="members-location">Top Left:</h4>
          <h5> Rita Grove - Board Advisor</h5>

          <p>
            The School of the Natural Order teachings as presented by Vitvan
            represents coming “Home” to me. A roadmap to discover my True Self,
            the “I Am I of me.” I am most grateful for the SNO of Colorado
            community fellowship on this journey of blessings, beauty and joy.
          </p>
        </div>
        <div className="note-item">
          <h4 className="members-location">Top Middle:</h4>
          <h5>John McKlosky - Vice President</h5>
          <p>
            "Being born a searcher, I found Vitvan and my search was complete.
            His knowledge and teachings resonate deeply with me, and my journey
            is forever in front of me."
          </p>
        </div>
        <div className="note-item">
          <h4 className="members-location">Top Right:</h4>
          <h5> Vic Weese - President</h5>

          <p>
            "The teachings of Vitvan and the School of the Natural Order guide
            me in Self understanding, moment to moment. The roadmap of the
            School helps provide answers to the question “why”."
          </p>
        </div>
      </div>
      <div className="members-bottom">
        <div className="note-item">
          <h4 className="members-location">Bottom Left:</h4>
          <h5> Bill LaShell - Advisor</h5>
          <p>
            "The teachings of The School of the Natural Order have become as
            substantial to me as air, water and food. In my urge to understand
            myself and the Nature of Reality this work provides an extremely
            valuable road map."
          </p>
        </div>
        <div className="note-item">
          <h4 className="members-location">Bottom Middle:</h4>
          <h5>Eric Schneider - Treasurer</h5>
          <p>
            "I find the teachings of the School of the Natural Order are like
            operating instructions for "Cosmos" (Order)! How to recognize and
            cooperate with the "Natural Order Process."
          </p>
        </div>
        <div className="note-item">
          <h4 className="members-location">Bottom Right:</h4>
          <h5>Kathi Wright - Secretary</h5>
          <p>
            "I value the School of the Natural Order because it helps me
            understand myself and why I'm here. It provides a clear roadmap for
            developing to my full potential."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Members
