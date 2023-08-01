package miniProject;

public class SpecialProduct extends Product {
    private double discount;

    public SpecialProduct(int id, String name, String description, String source, double discount) {
        super(id, name, description, source);
        this.discount = discount;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "SpecialProduct [id=" + getId() + ", name=" + getName() + ", description=" + getDescription() + ", source=" + getSource() + ", discount=" + discount + "]";
    }
}