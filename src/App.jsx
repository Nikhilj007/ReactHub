import "./App.css";

const blogs = [
  {
    id: '01',
    title: 'How to learn Javascript',
    cover:
      'https://images.unsplash.com/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  },
  {
    id: '02',
    title: 'ReactJS beginners guide',
    cover:
      'https://images.unsplash.com/photo-6f2b6890edc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '03',
    title: 'HTML semantic tags',
    cover:
      'https://images.unsplash.com/photo-1655838774838-4a1322530d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '04',
    title: 'Customize Radio Button',
  },
]

function App() {
  const placeholderImage =
    "https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80";

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };
  return (
    <>
      <div className="container blogs-page">
        <h2 className="page-title">Popular Blogs</h2>
        <div className="blog-section">
          {blogs.map(({ id, title, cover }) => (
            <div className="blogs" key={id}>
              <img
                src={cover ? cover : placeholderImage}
                alt="cover image"
                onError={onImageError}
              />
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
