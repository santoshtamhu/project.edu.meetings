import React from "react";

export default function ContactForm() {
  return (
    <div>
      <div className="container bg-white rounded-3xl p-10">
        <h2 className="uppercase mb-4 text-xl font-bold">let's get in touch</h2>
        <hr className="mb-9" />
        <form action="" className="">
          <input type="text" placeholder="your name" className="form-control" />
          <input
            type="text"
            placeholder="your email"
            className="form-control"
          />
          <input type="text" placeholder="subject" className="form-control" />
          <textarea
            type="string"
            placeholder="your message"
            className="font-medium form-control"
            rows={5}
          />
          <button className="btn uppercase">send message now</button>
        </form>
      </div>
    </div>
  );
}
