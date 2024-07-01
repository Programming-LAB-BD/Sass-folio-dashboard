import PageContainer from "@/Components/Container/PageContainer";

const elementItems = [
  {
    label: "Name",
    element_name: "input",
    input_type: "text",
    input_name: "name",
    placeholder_text: "Enter Your Name",
    tooltip_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatibus eveniet quibusdam nulla obcaecati architecto consequuntur quis optio! Asperiores ea dolorum non culpa unde pariatur! Accusantium rem minima impedit, ut porro ad praesentium. Quaerat quo aperiam neque, debitis, aliquid temporibus obcaecati iusto sit libero consequuntur nulla fugiat magni minus nihil magnam fuga! Qui tempora doloribus neque! Animi rerum quae maxime consectetur. Asperiores, mollitia et aliquid est quaerat maiores ab nesciunt hic, ex laboriosam animi quidem! Animi asperiores exercitationem voluptates quod nulla suscipit, unde, quo qui laborum nemo vero culpa error consectetur labore blanditiis. Fuga saepe fugiat architecto minus. Ipsam, culpa.",
    hint_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error repellendus ea aspernatur commodi dicta.",
  },
  {
    label: "Title",
    element_name: "input",
    input_type: "text",
    input_name: "title",
    placeholder_text: "Enter Your Title",
    tooltip_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatibus eveniet quibusdam nulla obcaecati architecto consequuntur quis optio! Asperiores ea dolorum non culpa unde pariatur! Accusantium rem minima impedit, ut porro ad praesentium. Quaerat quo aperiam neque, debitis, aliquid temporibus obcaecati iusto sit libero consequuntur nulla fugiat magni minus nihil magnam fuga! Qui tempora doloribus neque! Animi rerum quae maxime consectetur. Asperiores, mollitia et aliquid est quaerat maiores ab nesciunt hic, ex laboriosam animi quidem! Animi asperiores exercitationem voluptates quod nulla suscipit, unde, quo qui laborum nemo vero culpa error consectetur labore blanditiis. Fuga saepe fugiat architecto minus. Ipsam, culpa.",
    hint_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error repellendus ea aspernatur commodi dicta.",
  },
  {
    label: "Description",
    element_name: "textarea",
    input_type: "text",
    input_name: "description",
    placeholder_text: "Enter Your Description in 500 words",
    tooltip_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatibus eveniet quibusdam nulla obcaecati architecto consequuntur quis optio! Asperiores ea dolorum non culpa unde pariatur! Accusantium rem minima impedit, ut porro ad praesentium. Quaerat quo aperiam neque, debitis, aliquid temporibus obcaecati iusto sit libero consequuntur nulla fugiat magni minus nihil magnam fuga! Qui tempora doloribus neque! Animi rerum quae maxime consectetur. Asperiores, mollitia et aliquid est quaerat maiores ab nesciunt hic, ex laboriosam animi quidem! Animi asperiores exercitationem voluptates quod nulla suscipit, unde, quo qui laborum nemo vero culpa error consectetur labore blanditiis. Fuga saepe fugiat architecto minus. Ipsam, culpa.",
    hint_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error repellendus ea aspernatur commodi dicta.",
  },
  {
    label: "Logo",
    element_name: "input",
    input_type: "file",
    input_name: "logo",
    placeholder_text: "",
    tooltip_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptatibus eveniet quibusdam nulla obcaecati architecto consequuntur quis optio! Asperiores ea dolorum non culpa unde pariatur! Accusantium rem minima impedit, ut porro ad praesentium. Quaerat quo aperiam neque, debitis, aliquid temporibus obcaecati iusto sit libero consequuntur nulla fugiat magni minus nihil magnam fuga! Qui tempora doloribus neque! Animi rerum quae maxime consectetur. Asperiores, mollitia et aliquid est quaerat maiores ab nesciunt hic, ex laboriosam animi quidem! Animi asperiores exercitationem voluptates quod nulla suscipit, unde, quo qui laborum nemo vero culpa error consectetur labore blanditiis. Fuga saepe fugiat architecto minus. Ipsam, culpa.",
    hint_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error repellendus ea aspernatur commodi dicta.",
  },
];

export default function Dashboard() {
  return (
    <PageContainer header="Welcome to Sass-folio Dashboard.">
      <form action="" className="mt-10">
        {elementItems.map((item, index) => (
          <div
            className="input-form-group mb-8 w-[60%] md:w-[450px]"
            key={index}
          >
            <label className="font-medium pl-1">{item.label} :</label>
            <div className="flex items-center gap-2">
              {item.element_name === "input" ? (
                <input
                  type={item.input_type}
                  placeholder={item.placeholder_text}
                  name={item.input_name}
                  className="p-2 border border-primary rounded w-full bg-secondary text-primary"
                />
              ) : (
                <textarea
                  type={item.input_type}
                  placeholder={item.placeholder_text}
                  rows="3"
                  name={item.input_name}
                  className="p-2 border border-primary rounded w-full bg-secondary text-primary"
                ></textarea>
              )}
              <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
            </div>
            <div className="info text-xs text-zinc-400">
              <p>{item.hint_text}</p>
            </div>
          </div>
        ))}
      </form>
    </PageContainer>
  );
}
