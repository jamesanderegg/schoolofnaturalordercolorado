import React from "react"
import MembersPicture from "./membersPicture"

function Members() {
  return (
    <div className="members">
      <h2 style={{ textAlign: "center" }}>SNOC Members</h2>
      <MembersPicture filename="members.png" />
      <div className="members-top">
        <div className="note-item">
          <h4>Top Left:</h4>
          <h5> Vic Weese - President</h5>
          
          <p>
            "The teachings of Vitvan and the School of the Natural Order guide
            me in Self understanding, moment to moment. The roadmap of the
            School helps provide answers to the question “why”."
          </p>
        </div>
        <div className="note-item">
          <h4>Top Middle:</h4>
          <h5>John McKlosky - Vice President</h5>
          <p>
            "Being born a searcher, I found Vitvan and my search was complete.
            His knowledge and teachings resonate deeply with me, and my journey
            is forever in front of me."
          </p>
        </div>
        <div className="note-item">
          <h4>Top Right:</h4>
          <h5>Eric Schneider - Treasurer</h5>
          <p>
            "I find the teachings of the School of the Natural Order are like
            operating instructions for "Cosmos" (Order)! How to recognize and
            cooperate with the "Natural Order Process."
          </p>
        </div>
      </div>
      <div className="members-bottom">
        <div className="note-item">
          <h4>Bottom Left:</h4>
          <h5> Bill LaShell - Advisor</h5>
          <p>
          "The teachings of The School of the Natural Order have become as substantial to me as air, water and food. In my urge to understand myself and the Nature of Reality this work provides an extremely valuable road map."
          </p>
        </div>
        <div className="note-item">
          <h4>Bottom Right:</h4>
          <h5>Kathi Wright - Secretary</h5>
          <p>
          "I value the School of the Natural Order because it helps me understand myself and why I'm here.  It provides a clear roadmap for developing to my full potential." 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Members
