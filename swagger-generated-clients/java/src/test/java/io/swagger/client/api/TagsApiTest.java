/*
 * Tweek
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TagsApi
 */
@Ignore
public class TagsApiTest {

    private final TagsApi api = new TagsApi();

    
    /**
     * 
     *
     * Save tags
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void saveTagTest() throws ApiException {
        Object tagsToSave = null;
        api.saveTag(tagsToSave);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Get all tags
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void tagsGetTest() throws ApiException {
        List<String> response = api.tagsGet();

        // TODO: test validations
    }
    
}
