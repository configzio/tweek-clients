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
 * API tests for ConfiguraitonApi
 */
@Ignore
public class ConfiguraitonApiTest {

    private final ConfiguraitonApi api = new ConfiguraitonApi();

    
    /**
     * 
     *
     * Get tweek key value
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getValueTest() throws ApiException {
        String keyName = null;
        List<String> include = null;
        Boolean flatten = null;
        api.getValue(keyName, include, flatten);

        // TODO: test validations
    }
    
}