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
import io.swagger.client.model.Patch;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PolicyApi
 */
@Ignore
public class PolicyApiTest {

    private final PolicyApi api = new PolicyApi();

    
    /**
     * 
     *
     * Get Policies
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPoliciesTest() throws ApiException {
        List<Object> response = api.getPolicies();

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Replace Policy
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void replacePolicyTest() throws ApiException {
        api.replacePolicy();

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Update Policy
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePolicyTest() throws ApiException {
        Patch policyPatch = null;
        api.updatePolicy(policyPatch);

        // TODO: test validations
    }
    
}
