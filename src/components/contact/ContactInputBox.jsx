function ContactInputBox() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="*Enter your full name..."
          required
          className="w-85/100 m-2.5 mb-5 py-3.75 px-5 rounded-sm text-base border-1 border-gray-500 outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="*Enter your e-mail "
          required
          className="w-85/100 m-2.5 mb-5 py-3.75 px-5 rounded-sm text-base border-1 border-gray-500 outline-none"
        />
      </div>
      <div>
        <select
          data-selected="false"
          required
          className="w-85/100 m-2.5 mb-5 py-3.75 px-5 rounded-sm text-base border-1 border-gray-500 outline-none"
        >
          <option value disabled selected>Select a category...</option>
          <option value="Product Questions (New Customer)">
            Product Questions (New Customer)
          </option>
          <option value="Product Support (Existing Customer)">
            Product Support (Existing Customer)
          </option>
          <option value="Feedback / Feature Request">
            Feedback / Feature Request
          </option>
          <option value="Advertising / Press Inquires">
            Advertising / Press Inquires
          </option>
          <option value="Business Inquiried">Business Inquiried</option>
          <option value="General Options">General Options</option>
          <option value="Report Abuse / Rights Infringement">
            Report Abuse / Rights Infringement
          </option>
        </select>
      </div>
      <div>
        <textarea
          rows={4}
          cols={10}
          placeholder="*Enter your message..."
          required
          minLength={40}
          className="w-full m-2.5 mb-0.5 py-3.75 px-5 rounded-sm text-xl border-1 border-gray-500 outline-none resize-y"
        ></textarea>
        <legend className="text-sm ml-2.5 mb-7.5 text-gray-500">
          Message has to be minimum 40 character.<span>0</span>
          <span>/40</span> character minimum
        </legend>
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-3.75 px-5 rounded-sm text-xl bg-cor7 text-white border-none cursor-pointer hover:bg-cor8"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactInputBox;
