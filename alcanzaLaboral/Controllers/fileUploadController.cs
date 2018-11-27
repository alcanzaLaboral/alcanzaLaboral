using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace alcanzaLaboral.Controllers
{
    public class fileUploadController : ApiController
    {
        public async Task<HttpResponseMessage> Post()
        {
            // Check whether the POST operation is MultiPart?
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }


            // Prepare CustomMultipartFormDataStreamProvider in which our multipart form
            // data will be loaded.
            string fileSaveLocation = HttpContext.Current.Server.MapPath("~/documents");
            CustomMultipartFormDataStreamProvider provider = new CustomMultipartFormDataStreamProvider(fileSaveLocation);
            List<string> files = new List<string>();


            try
            {
                // Read all contents of multipart message into CustomMultipartFormDataStreamProvider.
                await Request.Content.ReadAsMultipartAsync(provider);

                foreach (MultipartFileData file in provider.FileData)
                {
                    files.Add(Path.GetFileName(file.LocalFileName));
                }

                // Send OK Response along with saved file names to the client.
                return Request.CreateResponse(HttpStatusCode.OK, files);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }

    public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
    {
        public CustomMultipartFormDataStreamProvider(string path) : base(path) { }

        public override string GetLocalFileName(HttpContentHeaders headers)
        {
            string variable = "" + headers.ContentDisposition.FileName.Replace("\"", string.Empty);
            return headers.ContentDisposition.FileName.Replace("\"", string.Empty);
        }
    }
}
