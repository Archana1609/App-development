package miniProject;
import miniProject.Product;
class Product implements Displayable{

  private int id;
  private String name;
  private String description;
  private String source;
	public Product(int id, String name, String description, String source) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.source = source;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", source=" + source + "]";
	}
	public void displayInfo(){
		System.out.println("Product Name : " + name );
	}
	}