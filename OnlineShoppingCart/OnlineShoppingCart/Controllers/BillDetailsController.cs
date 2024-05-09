using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingCart.Models;
using OnlineShoppingCart.Repository;

namespace OnlineShoppingCart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillDetailsController : BaseController<BillDetail>
    {
        public BillDetailsController(IBaseRepository<BillDetail> repository) : base(repository)
        {
        }
    }
}