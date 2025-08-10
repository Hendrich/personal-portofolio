package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.ExamplePage;

public class ExampleTest extends BaseTest {

    @Test
    public void pageTitleShouldContainExample() {
        String title = new ExamplePage(driver)
                .open()
                .getTitle();
        Assert.assertTrue(title.contains("Example"), "Title should contain 'Example'");
    }
}
