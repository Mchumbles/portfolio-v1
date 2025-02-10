function Contact({ rows = 6 }) {
  return (
    <section className="flex flex-col mb-20 mx-auto p-5">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/avrwezga"
          method="POST"
          className="flex flex-col w-full md:w-7/12 space-y-3"
        >
          <h3 className="mb-5 text-3xl font-semibold text-center">Contact</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="p-2 border-2 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className="p-2 border-2 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={rows}
            className="p-2 border-2 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Message"
            required
          />
          <button
            type="submit"
            className="cursor-pointer text-center inline-block px-8 py-2 w-max text-base font-medium rounded-md bg-cyan-600 shadow-lg shadow-cyan-600/50 hover:bg-cyan-900 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
