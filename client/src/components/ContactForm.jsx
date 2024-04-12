import React from "react";

export default function ContactForm() {
  return (
    <div>
      <div className=" bg-white rounded-3xl p-10">
        <h2 className="uppercase mb-4 text-xl font-bold">let's get in touch</h2>
        <hr className="mb-9" />
        <form
          action=""
          className="lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-x-5"

          // grid style 
          style={{
            gridTemplateColumns: "auto auto",
            gridTemplateRows: "auto auto auto auto",
          }}
        >
          <div className="col-span-1">
            <input
              type="text"
              placeholder="your name"
              className="form-control"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="your email"
              className="form-control"
            />
          </div>
          <div className="col-span-2">
            <input type="text" placeholder="subject" className="form-control" />
          </div>
          <div className="col-span-2">
            <textarea
              type="string"
              placeholder="your message"
              className="font-medium form-control"
              rows={5}
            />
          </div>
          <div className="col-span-1 w-[195px]">
            <button className="btn uppercase">send message now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
