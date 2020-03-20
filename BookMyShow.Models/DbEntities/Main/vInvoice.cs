using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("vInvoice",Schema="dbo")]
    public partial class vInvoice
    {

        public string MovieName { get; set; }


        public string MultiplexName { get; set; }


        public string MultiplexLocation { get; set; }


        public Nullable<int> SeatNumber { get; set; }


        public decimal SubTotal { get; set; }


        public decimal AmountPayble { get; set; }


        public vInvoice()
        {
        }
	}
}