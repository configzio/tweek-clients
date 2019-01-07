/* 
 * Tweek
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing SuggestionsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class SuggestionsApiTests
    {
        private SuggestionsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new SuggestionsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of SuggestionsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' SuggestionsApi
            //Assert.IsInstanceOfType(typeof(SuggestionsApi), instance, "instance is a SuggestionsApi");
        }

        
        /// <summary>
        /// Test GetSuggestions
        /// </summary>
        [Test]
        public void GetSuggestionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetSuggestions();
            //Assert.IsInstanceOf<List<Object>> (response, "response is List<Object>");
        }
        
    }

}
