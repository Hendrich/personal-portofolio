package pages;

import org.openqa.selenium.WebDriver;

public class ExamplePage {
    private final WebDriver driver;
    private static final String URL = "https://labs.hendri.me";

    public ExamplePage(WebDriver driver) {
        this.driver = driver;
    }

    public ExamplePage open() {
        driver.get(URL);
        return this;
    }

    public String getTitle() {
        return driver.getTitle();
    }
}
